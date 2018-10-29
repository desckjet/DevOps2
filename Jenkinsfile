pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm install
ng serve'''
      }
    }
    stage('Test') {
      steps {
        bat 'ng test'
      }
    }
  }
}