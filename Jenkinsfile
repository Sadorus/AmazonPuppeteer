pipeline {
  agent any
  tools {nodejs "RecentNode"}
  stages {
    stage('error') {
      steps {
        sh '''npm install
jest test'''
      }
    }
  }
}
