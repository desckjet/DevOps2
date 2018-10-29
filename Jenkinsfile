pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm run ng build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run ng test'
      }
    }
  }
}