pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh '''export PATH=$PATH:/usr/local/bin
npm install
npm test'''
      }
    }
  }
  tools {
    nodejs 'RecentNode'
  }
}