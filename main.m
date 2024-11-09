/******************************************************************************

                            Online Objective-C Compiler.
                Code, Compile, Run and Debug Objective-C program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/


#import <Foundation/Foundation.h>

int main (int argc, const char * argv[])
{
NSString *str = @"Hello World";

fprintf(stdout, "%s", [str UTF8String]);
        return 0;
}