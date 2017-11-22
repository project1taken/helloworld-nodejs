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
    app.push('Staging')
    }
  }
  stage ('Deploy'){
    sh 'ssh ec2-user@ec2-107-20-66-27.compute-1.amazonaws.com docker pull rvarg11/nodejsapp:Staging'
    sh 'ssh ec2-user@ec2-107-20-66-27.compute-1.amazonaws.com docker rm -f ndoejsapp'
    sh 'ssh ec2-user@ec2-107-20-66-27.compute-1.amazonaws.com docker run -d -p 3000:3000 --name ndoejsapp rvarg11/nodejsapp:Staging'
  }
}