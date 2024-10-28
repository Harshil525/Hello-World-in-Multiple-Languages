section .data
    hello db 'HelloWorld', 0xA  ; The string to print, ending with a newline (0xA)

section .text
    global _start                  ; Entry point for the program

_start:
    ; Write syscall
    mov eax, 4                     ; syscall number for sys_write (4)
    mov ebx, 1                     ; file descriptor (1 = stdout)
    mov ecx, hello                 ; pointer to the string
    mov edx, 13                    ; length of the string (13 characters)
    int 0x80                       ; make the system call

    ; Exit syscall
    mov eax, 1                     ; syscall number for sys_exit (1)
    xor ebx, ebx                   ; exit code 0
    int 0x80                       ; make the system call show output
