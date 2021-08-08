<nav>
  <button class={className()}><slot /></button>
</nav>

<script lang="ts">
  export let theme: 'primary' | 'secondary'
  export let size: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  export let block: boolean = false

  const className = () => {
    const baseClassName = () => ('inline-flex items-center border border-transparent shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2')
    const themeClassName = () => {
      if (theme === 'primary') {
        return 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
      } else if (theme === 'secondary') {
        return 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500'
      } else {
        return ''
      }
    }
    const sizeClassName = () => {
      if (size === 'xs') {
        return 'px-2.5 py-1.5 text-xs rounded'
      } else if (size === 'sm') {
        return 'px-3 py-2 text-sm leading-4 rounded-md'
      } else if (size === 'base') {
        return 'px-4 py-2 text-sm rounded-md'
      } else if (size === 'lg') {
        return 'px-4 py-2 text-base rounded-md'
      } else if (size === 'xl') {
        return 'px-6 py-3 text-base rounded-md'
      } else {
        return ''
      }
    }
    const widthClassName = () => {
      return block ? 'flex flex-row justify-center items-center w-full' : ''
    }

    return `${baseClassName()} ${themeClassName()} ${sizeClassName()} ${widthClassName()}`
  }
</script>
