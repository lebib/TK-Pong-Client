#include <zmq.hpp>
#include <string>
#include <iostream>
#include "communicate.hpp"

using namespace std;

Communicate::Communicate(zmq::socket_t *skt)
  : socket(skt)
{
  socket->bind("tcp://127.0.0.1:4548");
}

Communicate::~Communicate()
{
  // delete socket;
}

void Communicate::send(string msg){
  cout<<msg<<endl;
  char output[1];
  strcpy(output, msg.c_str());
  zmq::message_t reply (1);
  memcpy ((void *) reply.data (), output , 1);
  socket->send (reply);
}

