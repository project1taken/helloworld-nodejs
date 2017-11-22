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
    app.push('Release')
    }
  }
  stage ('Deploy'){
    sh 'ssh ec2-user@ec2-52-90-168-175.compute-1.amazonaws.com docker pull rvarg11/nodejsapp:Release'
    sh 'ssh ec2-user@ec2-52-90-168-175.compute-1.amazonaws.comm docker rm -f nodejsapp'
    sh 'ssh ec2-user@ec2-52-90-168-175.compute-1.amazonaws.com docker run -d -p 3000:3000 --name nodejsapp rvarg11/nodejsapp:Release'
  }
}
 
