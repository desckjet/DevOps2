pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''cd C:\\Program Files (x86)\\Jenkins\\workspace\\DevOps2_prueba-2HXQOU2YEVPSGLRYZIQEDBBBGR76PSE47IOSBGP452W6EKJKV5PQ
npm install
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