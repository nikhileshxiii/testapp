pipeline {
    agent {
        kubernetes {
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                    containers:
                    - name: node
                      image: node:16-alpine3.12
                      command:
                      - cat
                      tty: true
            '''
        }
    }

    stages {

        stage('clean ws') {
            steps {
                cleanWs()
            }
        }

        stage('checkoug scm') {
            steps {
                checkout scm
            }
        }

        stage('npm install deps') {
            steps {
                container('node') {
                    sh 'npm install'
                }
            }
        }

        stage('npm test') {
            steps {
                container('node') {
                    sh 'npm test'
                }
            }
        }
    }
}