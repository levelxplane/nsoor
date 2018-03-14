node {
    def app
    stage("Build image") {
        app = docker.build("gcr.io/spectral-153422/nsoor:test")
    }
    stage("Push Image") {
      docker.withRegistry('gcr.io', 'spectral-153422')
      app.push()
    }
}
