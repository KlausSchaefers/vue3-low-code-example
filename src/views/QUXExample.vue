<template>
  <div class="home">
    <QUX :app="design" :config="config" v-model="viewModel" ref="qux"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'QuxEample',
  data: function() {
    return {
      design: 'a2aa10aAzTPNq2B5yaDMREzIx9s5eeyyFsSqln5vtTft5dGoqy7wYJx9rJYO',
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
          prefix: ''
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
