pipeline {

    agent { dockerfile true}

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm -v'
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
