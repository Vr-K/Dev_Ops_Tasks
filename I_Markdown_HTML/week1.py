# Veera Koo and the dark timeline
import csv

MonCount = 0
TueCount = 0
WedCount = 0
ThuCount = 0
FriCount = 0
SatCount = 0
SunCount = 0
NumCount = 0

def readingFiles(FileName, MonCount, TueCount, WedCount, ThuCount, FriCount, SatCount, SunCount):

    with open(f"{FileName}", 'rt') as f:
        reader = csv.reader(f, delimiter = ",")
        for row in reader:                      # reader prints "<_csv.reader object at 0x000001E1B1ADE620>"?
            for field in row:                   # field prints the whole line as str
                                                # row as a list? ['Tuesday;21;92;0.17']
                if row == "\n":                 # if string is empty, pass
                    pass
                elif "Monday" in field:
                    MonCount = MonCount + 1
                elif "Tuesday" in field:
                    TueCount = TueCount + 1
                elif "Wednesday" in field:
                    WedCount = WedCount + 1
                elif "Thursday" in field:
                    ThuCount = ThuCount + 1
                elif "Friday" in field:
                    FriCount = FriCount + 1
                elif "Saturnday" in field:
                    SatCount = SatCount + 1
                elif "Sunday" in field:
                    SunCount = SunCount + 1
                else:
                    pass
    printCount(MonCount, TueCount, WedCount, ThuCount, FriCount, SatCount, SunCount)
    return FileName, MonCount, TueCount, WedCount, ThuCount, FriCount, SatCount, SunCount

def printCount(MonCount, TueCount, WedCount, ThuCount, FriCount, SatCount, SunCount):
    print(f"""### Timestamp analysis ###
 - Monday {MonCount} stamps
 - Tuesday {TueCount} stamps
 - Wednesday {WedCount} stamps
 - Thursday {ThuCount} stamps
 - Friday {FriCount} stamps
 - Saturnday {SatCount} stamps
 - Sunday {SunCount} stamps
### Timestamp analysis ###""")

def main() -> None:
    print("Program starting.")

    FileName = input("Insert filename: ")
    print(f"Reading file \"{FileName}\".")
    print("Analysing timestamps.")
    print("Displaying results.")

    readingFiles(FileName, MonCount, TueCount, WedCount, ThuCount, FriCount, SatCount, SunCount)

    print("Program ending.")
    return None

main()

# ok so apparently my biggest problem here was i forgot that csv files need to be
# imported seperately in here
# i am so rusty on this all