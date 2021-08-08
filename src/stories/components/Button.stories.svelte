<Meta
  title="Common/Button"
  component={Button}
  argTypes={{
    theme: {
      control: { type: 'select', options: ['primary', 'secondary'] },
    },
    size: {
      control: { type: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl'] },
    },
    block: {
      control: { type: 'boolean' },
    },
    'slots.default': {
      control: { type: 'text' },
    },
  }}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick}>{args['slots.default']}</Button>
</Template>

<Story
  name="Default"
  args={{
    theme: 'secondary',
    size: 'base',
    block: true,
    'slots.default': 'Button',
  }}
/>

<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from '../../components/Button/index.svelte';
</script>
