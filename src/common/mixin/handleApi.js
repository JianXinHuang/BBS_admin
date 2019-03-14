export default {
  methods: {
    handleAPI (type, api, data) {
      switch (type) {
      case 'add':
        break
      case 'update':
        break
      case 'delete':
        return new Promise((resolve, reject) => {
          this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            api(data).then(res => {
              this.$message({
                showClose: true,
                message: res.message,
                type: res.success ? 'success' : 'error',
                duration: 2000
              })
              resolve()
            })
          })
        })
      }
    }
  }
}