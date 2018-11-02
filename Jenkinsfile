pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        nodejs('node') {
          bat 'ng build'
        }

      }
    }
    stage('Test') {
      steps {
        nodejs('node') {
          bat 'ng test --watch=false'
        }

      }
    }
  }
}