pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        bat 'ng build'
      }
    }
    stage('Test') {
      steps {
        bat 'ng test --watch=false'
      }
    }
  }
}