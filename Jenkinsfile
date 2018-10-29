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
        bat 'cd C:\\Program Files (x86)\\Jenkins\\workspace\\DevOps2_prueba-2HXQOU2YEVPSGLRYZIQEDBBBGR76PSE47IOSBGP452W6EKJKV5PQ'
        bat 'npm install'
        bat 'ng test'
      }
    }
  }
}