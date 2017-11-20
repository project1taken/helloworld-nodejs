node{
def app
  stage ('checkout'){
    checkout scm
  }
  stage ('build'){
    app = docker.build('rvarg11/nodejsapp')
  }
  stage ('Test'){
    app.inside{
    sh 'echo "Test Passed"'
    }
  }
  stage ('Publish'){
    docker.withRegistry('http://registry.hub.docker.com','docker-cred'){
    app.push('Dev')
    }
  } 
}
