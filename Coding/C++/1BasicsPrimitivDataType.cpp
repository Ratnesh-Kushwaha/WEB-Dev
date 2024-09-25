#include <iostream>
using namespace std;

//starting point of execution
int main(){
    cout << "apna college \nhello "<< endl<<"this is in new line"<<endl;
   //SHOWING DATATYPES WITH EXAMPLES AND OUTPUTS 
    int age=23;         //it is of 4Bytes
    char name='A';    //it is of 1Bytes
    float val=4.434f;  //after out value in float dataType we write f it is of 4Bytes
    bool r1=false;   //boolean store true as 1 and false as 0
    double v=100.4;

    cout<<age  <<"\n"<<sizeof(age) <<endl;   //sizeof() function show how much bytes of data the dataType is covering
    cout<<name<<endl ;  
    cout<<val <<endl;
    cout<<r1<<endl;
    cout<<v;


    return 0;
}

