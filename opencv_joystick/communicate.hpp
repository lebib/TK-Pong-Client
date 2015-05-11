#ifndef _COMMUNICATE__
#define _COMMUNICATE_

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <netdb.h> 
#include <zmq.hpp>


using namespace std;

class Communicate{
public:
  Communicate(zmq::socket_t *skt);
  ~Communicate();

  void send(string msg);
private:
  zmq::socket_t *socket;
  char buffer[256];
};

#endif

