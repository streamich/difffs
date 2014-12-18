var errno = function(err) {
  switch (err.code) {
    case 'EPERM':           return 1
    case 'ENOENT':          return 2
    case 'ESRCH':           return 3
    case 'EINTR':           return 4
    case 'EIO':             return 5
    case 'ENXIO':           return 6
    case 'E2BIG':           return 7
    case 'ENOEXEC':         return 8
    case 'EBADF':           return 9
    case 'ECHILD':          return 10
    case 'EAGAIN':          return 11
    case 'ENOMEM':          return 12
    case 'EACCES':          return 13
    case 'EFAULT':          return 14
    case 'ENOTBLK':         return 15
    case 'EBUSY':           return 16
    case 'EEXIST':          return 17
    case 'EXDEV':           return 18
    case 'ENODEV':          return 19
    case 'ENOTDIR':         return 20
    case 'EISDIR':          return 21
    case 'EINVAL':          return 22
    case 'ENFILE':          return 23
    case 'EMFILE':          return 24
    case 'ENOTTY':          return 25
    case 'ETXTBSY':         return 26
    case 'EFBIG':           return 27
    case 'ENOSPC':          return 28
    case 'ESPIPE':          return 29
    case 'EROFS':           return 30
    case 'EMLINK':          return 31
    case 'EPIPE':           return 32
    case 'EDOM':            return 33
    case 'ERANGE':          return 34
    case 'EDEADLK':         return 35
    case 'ENAMETOOLONG':    return 36
    case 'ENOLCK':          return 37
    case 'ENOSYS':          return 38
    case 'ENOTEMPTY':       return 39
    case 'ELOOP':           return 40
    case 'EWOULDBLOCK':     return errno('EAGAIN')
    case 'ENOMSG':          return 42
    case 'EIDRM':           return 43
    case 'ECHRNG':          return 44
    case 'EL2NSYNC':        return 45
    case 'EL3HLT':          return 46
    case 'EL3RST':          return 47
    case 'ELNRNG':          return 48
    case 'EUNATCH':         return 49
    case 'ENOCSI':          return 50
    case 'EL2HLT':          return 51
    case 'EBADE':           return 52
    case 'EBADR':           return 53
    case 'EXFULL':          return 54
    case 'ENOANO':          return 55
    case 'EBADRQC':         return 56
    case 'EBADSLT':         return 57
    case 'EDEADLOCK':       return errno('EDEADLK')
    case 'EBFONT':          return 59
    case 'ENOSTR':          return 60
    case 'ENODATA':         return 61
    case 'ETIME':           return 62
    case 'ENOSR':           return 63
    case 'ENONET':          return 64
    case 'ENOPKG':          return 65
    case 'EREMOTE':         return 66
    case 'ENOLINK':         return 67
    case 'EADV':            return 68
    case 'ESRMNT':          return 69
    case 'ECOMM':           return 70
    case 'EPROTO':          return 71
    case 'EMULTIHOP':       return 72
    case 'EDOTDOT':         return 73
    case 'EBADMSG':         return 74
    case 'EOVERFLOW':       return 75
    case 'ENOTUNIQ':        return 76
    case 'EBADFD':          return 77
    case 'EREMCHG':         return 78
    case 'ELIBACC':         return 79
    case 'ELIBBAD':         return 80
    case 'ELIBSCN':         return 81
    case 'ELIBMAX':         return 82
    case 'ELIBEXEC':        return 83
    case 'EILSEQ':          return 84
    case 'ERESTART':        return 85
    case 'ESTRPIPE':        return 86
    case 'EUSERS':          return 87
    case 'ENOTSOCK':        return 88
    case 'EDESTADDRREQ':    return 89
    case 'EMSGSIZE':        return 90
    case 'EPROTOTYPE':      return 91
    case 'ENOPROTOOPT':     return 92
    case 'EPROTONOSUPPORT': return 93
    case 'ESOCKTNOSUPPORT': return 94
    case 'EOPNOTSUPP':      return 95
    case 'EPFNOSUPPORT':    return 96
    case 'EAFNOSUPPORT':    return 97
    case 'EADDRINUSE':      return 98
    case 'EADDRNOTAVAIL':   return 99
    case 'ENETDOWN':        return 100
    case 'ENETUNREACH':     return 101
    case 'ENETRESET':       return 102
    case 'ECONNABORTED':    return 103
    case 'ECONNRESET':      return 104
    case 'ENOBUFS':         return 105
    case 'EISCONN':         return 106
    case 'ENOTCONN':        return 107
    case 'ESHUTDOWN':       return 108
    case 'ETOOMANYREFS':    return 109
    case 'ETIMEDOUT':       return 110
    case 'ECONNREFUSED':    return 111
    case 'EHOSTDOWN':       return 112
    case 'EHOSTUNREACH':    return 113
    case 'EALREADY':        return 114
    case 'EINPROGRESS':     return 115
    case 'ESTALE':          return 116
    case 'EUCLEAN':         return 117
    case 'ENOTNAM':         return 118
    case 'ENAVAIL':         return 119
    case 'EISNAM':          return 120
    case 'EREMOTEIO':       return 121
    case 'EDQUOT':          return 122
    case 'ENOMEDIUM':       return 123
    case 'EMEDIUMTYPE':     return 124
  }

  return 1
}

module.exports = errno