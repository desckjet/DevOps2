pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'ng serve'
      }
    }
    stage('Test') {
      steps {
        bat 'ng test'
      }
    }
  }
}