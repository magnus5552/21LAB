class ColumnImport (object):
    
    def __init__(self, value, column_len):
        self.value = value
        self.column_len = column_len
        self.column_len_half = column_len//2
    
    def column (self):
        return ['']*self.column_len_half + \
            [str(self.value)] + ['']*(self.column_len - self.column_len_half-1)
