import numpy as np
from decimal import Decimal
from decimal import getcontext

getcontext().prec = 3


class acceleration:

    def __init__(self, list):

        self.radius = decimalConvert(list[0])
        self.number_of_revolutions = decimalConvert(list[1])
        self.delta = decimalConvert(list[2])
        self.time = self.delta/self.number_of_revolutions
        self.height = decimalConvert(list[3])
        self.mass = decimalConvert(list[4])
        self.acceleration1 = Decimal(np.pi)**2*4*self.radius*(self.time**(-2))
        self.acceleration2 = Decimal(9.8)*self.radius/self.height

    def names(self):

        return [self.time, self.acceleration1, self.acceleration2]


class isobaric:

    def __init__(self, list):

        self.length = decimalConvert(list[0])
        self.deltaLength = decimalConvert(list[1])
        self.endLength = self.length - self.deltaLength

        self.temperature1 = decimalConvert(list[2])
        self.temperature2 = decimalConvert(list[3])
        self.temperature1K = self.temperature1 + Decimal('273')
        self.temperature2K = self.temperature2 + Decimal('273')

        self.ratio1 = self.temperature1K/self.length
        self.ratio2 = self.temperature2K/self.endLength

    def names(self):

        return [self.endLength, self.temperature1K, self.temperature2K,
                self.ratio1, self.ratio2]


class friction:

    def __init__(self, list):

        self.length = decimalConvert(list[0])
        self.height1 = np.array([decimalConvert(list[i])
                                 for i in range(1, 7, 2)])
        self.height2 = np.array([decimalConvert(list[i])
                                 for i in range(2, 7, 2)])
        self.delta1 = (self.length**2 - self.height1**2)**Decimal(.5)
        self.delta2 = (self.length**2 - self.height2**2)**Decimal(.5)
        self.coefficient1 = self.height1/self.delta1
        self.coefficient1mid = self.coefficient1.mean()
        self.coefficient2 = self.height2/self.delta2
        self.coefficient2mid = self.coefficient2.mean()

    def names(self):

        output_elems = [self.delta1, self.coefficient1,
                        self.delta2, self.coefficient2]
        output = []
        for j in range(3):
            for i in range(4):
                output.append(output_elems[i][j])
        output.insert(2, self.coefficient1mid)
        output.insert(5, self.coefficient2mid)

        return output


functions = {'acceleration': acceleration,
             'isobaric': isobaric, 'friction': friction}


def decimalConvert(digit):
    return Decimal(str(digit))
