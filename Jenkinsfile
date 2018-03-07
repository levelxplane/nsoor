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
        stage('Push') {
            steps {
                echo 'Testing...'
                sh 'gcloud docker -- push gcr.io/spectral-153422/nsoor:test'
            }
        }
    }
}
