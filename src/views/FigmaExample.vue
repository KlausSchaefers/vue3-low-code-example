<template>
  <div class="home">
    <Figma :figma="figmaConfig" :config="config" v-model="viewModel"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'FigmaExample',
  data: function() {
    return {
      figmaConfig: {
        figmaFile: "",
        figmaAccessKey: "",
      },
      showViewModel: true,
      viewModel: {
          stringValue: 'klaus was here',
          booleanValue: true
      },
      config: {
        components: {
        },
        router: {
          key: 'screenName',
          prefix: '/figma/'
        }
      }
    }
  },
  methods: {
    onClick (){
      alert('Click')
    }
  }
}
</script>
