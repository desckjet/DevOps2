pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'ng serve'
      }
    }
    stage('Test') {
      steps {
        bat 'ng test'
      }
    }
  }
}