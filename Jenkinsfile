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
        sleep(time: 4, unit: 'MINUTES')
        bat 'npm run ng test '
      }
    }
  }
}