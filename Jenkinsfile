pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh '''npm install
jest test'''
      }
    }
  }
}