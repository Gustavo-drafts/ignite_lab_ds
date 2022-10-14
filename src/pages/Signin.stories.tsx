import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, waitFor } from '@storybook/testing-library'
import { Signin } from './Signin'
import { expect } from '@storybook/jest'

export default {
  title: 'Pages/Signin',
  component: Signin,
  args: {},
  argTypes: {},
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'exemplo@email.com')
    userEvent.type(canvas.getByPlaceholderText('******'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Acesso concedido!')).toBeInTheDocument()
    })
  }
}