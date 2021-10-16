pipeline {
    agent any

    stages {

        stage('clean ws') {
            cleanWs()
        }

        stage('checkoug scm') {
            checkout scm
        }

        stage('npm install deps') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('npm test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

    }
}