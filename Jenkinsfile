pipeline {

    stages {
        agent {
            dockerfile {
                additionalBuildArgs '-t gcr.io/spectral-153422/nsoor:test'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}
