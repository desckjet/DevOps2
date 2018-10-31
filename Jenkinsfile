pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm install -g @angular/cli'
        bat 'npm install'
        bat 'npm run ng build'
      }
    }
    stage('Test') {
      steps {
        nodejs 'ng test --watch=false'
      }
    }
  }
}