temp = []
vis = []

def permute(arr):
    score = 0

    if(len(arr)==len(temp)):
        # print(temp)
        for i in range(0, len(arr)):
            for j in range(len(arr)):
                if(temp[i]==arr[j]):
                    index = j
                    if(index==0):
                       score = score + arr[index+1]
                    elif(index==len(arr)-1):
                        score = score + arr[index-1]
                    elif (len(arr)==1):
                        score = arr[index]
                    else:
                        score = score + arr[index-1] + arr[index + 1] 
                           


        #     score = temp[i+1] + score
        # score = score + temp[len(temp) - 1]    
        print(score)
        if(score == 20):
            print('......... Yes ......')    
      
        
    else:
        for i in range(len(arr)):
            if(vis[i]==False):
                temp.append(arr[i])
                vis[i] = True
                permute(arr)
                temp.pop()
                vis[i] = False
    


if __name__ == "__main__":
    
    arr = [3, 1, 5, 8]
    for i in range(10):
        vis.append(False)
    permute(arr)
    