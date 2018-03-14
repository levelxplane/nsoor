pipeline {
    agent none
    stages {
        stage("Docker Build") {
            agent {
                dockerfile{
                  filename 'Dockerfile'
                  buildAdditionalArgs '-t gcr.io/spectral-153422/nsoor:test'
                }
            }
        }
        stage("IDK"){
            sh("cat LOL")
        }
    }
}
