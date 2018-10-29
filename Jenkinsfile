pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''cd C:\\Program Files (x86)
cd Jenkins
cd workspace
cd DevOps
npm install
ng test'''
      }
    }
    stage('Test') {
      steps {
        bat 'ng test'
      }
    }
  }
}