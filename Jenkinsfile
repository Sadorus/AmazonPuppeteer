pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh '''export PATH=$PATH:/usr/local/bin
npm install
ldd chrome | grep not
npm test'''
      }
    }
  }
  tools {
    nodejs 'RecentNode'
  }
}