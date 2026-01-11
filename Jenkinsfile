pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                  node --version
                  npm --version
                  npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'   // intentional failure
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
