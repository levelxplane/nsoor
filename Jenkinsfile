pipeline {

    agent {
        dockerfile {
            additionalBuildArgs '-t gcr.io/spectral-153422/nsoor:test'
        }
    }

    stages {
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}
