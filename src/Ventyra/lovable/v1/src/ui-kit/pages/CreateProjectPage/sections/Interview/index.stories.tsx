/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  CreateProjectInterviewSection as Component,
  CreateProjectInterviewSectionProps,
} from './'

// type CreateProjectInterviewSectionProps = {
//   setStage: (stage: CreateProjectSection) => void

//   filledAllCount: number
//   filledRequiredCount: number
//   requiredProps: PropertySchema[]
//   preview: SidebarPreview
//   // setPreview: React.Dispatch<React.SetStateAction<SidebarPreview>>
//   requiredProgress: number

//   // collected: Partial<Record<PropertyId, PropertyValue>>
//   setCollected: React.Dispatch<
//     React.SetStateAction<Partial<Record<PropertyId, PropertyValue>>>
//   >
//   setPreview: React.Dispatch<React.SetStateAction<SidebarPreview>>
//   visibleCollected: CollectedState
// }

type Props = Pick<
  CreateProjectInterviewSectionProps,
  | 'filledAllCount'
  | 'filledRequiredCount'
  | 'preview'
  | 'requiredProgress'
  | 'visibleCollected'
>

const Renderer: React.FC<Props> = ({
  // filledAllCount,
  // filledRequiredCount,
  // requiredProgress,
  ...other
}) => {
  return (
    <Component
      {...other}
      requiredProps={[]}
      setStage={console.log}
      setCollected={console.log}
      setPreview={console.log}
    />
  )
}

const meta = {
  title: 'Pages/CreateProject/sections/Interview',
  component: Renderer,
  argTypes: {
    // variant: {
    //   control: 'select',
    //   options: Object.values(ComponentVariant),
    // },
    // size: {
    //   control: 'select',
    //   options: Object.values(ComponentSize),
    // },
    // disabled: {
    //   control: 'boolean',
    // },
  },
  args: {},
} satisfies Meta<typeof Renderer>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    filledAllCount: 0,
    filledRequiredCount: 0,
    preview: 'empty',
    requiredProgress: 0,
    visibleCollected: {},
  },
}

export const Live: Story = {
  args: {
    filledAllCount: 0,
    filledRequiredCount: 0,
    preview: 'live',
    requiredProgress: 0,
    visibleCollected: {
      name: {
        value: 'My project',
        score: 0.7,
      },
      oneLiner: {
        value: 'oneLiner Answer',
        score: -0.7,
      },
    },
  },
}

export const Filled: Story = {
  args: {
    filledAllCount: 0,
    filledRequiredCount: 0,
    preview: 'filled',
    requiredProgress: 0,
    visibleCollected: {
      name: {
        value: 'My project',
        score: 0.7,
      },
      oneLiner: {
        value: 'oneLiner Answer',
        score: -0.7,
      },
    },
  },
}
