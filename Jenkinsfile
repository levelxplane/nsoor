pipeline {

    agent {
        docker {
            image 'node:argon'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker build -f Dockerfile.node -t gcr.io/spectral-153422/nsoor:test'
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
