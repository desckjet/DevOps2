pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'cd C:\\Program Files (x86)'
        bat 'cd Jenkins'
        bat 'cd workspace'
        bat 'cd DevOps2_prueba-2HXQOU2YEVPSGLRYZIQEDBBBGR76PSE47IOSBGP452W6EKJKV5PQ'
        bat 'npm install'
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