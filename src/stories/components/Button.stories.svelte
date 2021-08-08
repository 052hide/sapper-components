<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import Button from '../../components/Button/index.svelte'
</script>

<Meta
  title="Common/Button"
  component={Button}
  argTypes={{
    theme: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
    size: {
      control: { type: "select", options: ["xs", "sm", "base", "lg", "xl"] },
    },
    block: {
      control: { type: 'boolean' }
    }
  }}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick}>Button</Button>
</Template>

<Story
  name="Button"
  args={{
    theme: 'secondary',
    size: 'base',
    block: true
  }}
/>
