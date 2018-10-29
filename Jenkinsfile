pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\DevOps2_prueba-2HXQOU2YEVPSGLRYZIQEDBBBGR76PSE47IOSBGP452W6EKJKV5PQ'
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