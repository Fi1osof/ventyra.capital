import { print } from 'graphql'
import { VentyraSaveDialogDocument } from 'src/gql/generated'
import { NodeType } from 'server/n8n/workflows/agent-factory/interfaces'
import { getGraphqlRequestWorkflowName } from 'server/n8n/workflows/tool-graphql-request/helpers'

const saveDialogMutation = print(VentyraSaveDialogDocument)

export interface SaveDialogNodeConfig {
  agentId: string
  agentName: string
}

export function getSaveDialogNodes(config: SaveDialogNodeConfig): NodeType[] {
  const { agentId, agentName } = config

  const prepareNode: NodeType = {
    id: `${agentId}-prepare-save-dialog`,
    name: `Prepare Save Dialog (${agentId})`,
    type: 'n8n-nodes-base.code',
    typeVersion: 2,
    position: [2670, -550],
    parameters: {
      jsCode: `const items = $input.all();
const user = $('Prepare Context').first().json.user;

return items.map(item => {
  return {
    json: {
      variables: JSON.stringify({
        data: {
          incomeMessage: item.json.chatInput || null,
          replayMessage: item.json.output || null,
          sessionId: item.json.sessionId || null,
          userId: user?.id || null,
        },
      }),
    },
  };
});`,
    },
  }

  const executeNode: NodeType = {
    id: `${agentId}-save-dialog`,
    name: `Save Dialog (${agentId})`,
    type: 'n8n-nodes-base.executeWorkflow',
    typeVersion: 1.2,
    position: [2870, -550],
    onError: 'continueErrorOutput',
    parameters: {
      workflowId: {
        __rl: true,
        mode: 'list',
        value: getGraphqlRequestWorkflowName(agentName),
      },
      workflowInputs: {
        mappingMode: 'defineBelow',
        value: {
          query: saveDialogMutation,
          variables: '={{ $json.variables }}',
        },
        matchingColumns: [],
        schema: [
          {
            id: 'query',
            displayName: 'query',
            required: true,
            defaultMatch: false,
            display: true,
            canBeUsedToMatch: true,
            type: 'string',
          },
          {
            id: 'variables',
            displayName: 'variables',
            required: true,
            defaultMatch: false,
            display: true,
            canBeUsedToMatch: true,
            type: 'string',
          },
        ],
        attemptToConvertTypes: false,
        convertFieldsToString: false,
      },
    },
  }

  return [prepareNode, executeNode]
}
