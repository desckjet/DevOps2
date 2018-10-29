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
        bat 'npm run ng test '
        sleep(time: 5, unit: 'MINUTES')
      }
    }
  }
}