temp = []
vis = []

def permute(arr):
    score = 0

    if(len(arr)==len(temp)):
        print(temp)
        for i in range(0, len(temp)-1):
            score = temp[i+1] + score
        score = score + temp[len(temp) - 1]    
        print(score)    
      
        
    else:
        for i in range(len(arr)):
            if(vis[i]==False):
                temp.append(arr[i])
                vis[i] = True
                permute(arr)
                temp.pop()
                vis[i] = False
    


if __name__ == "__main__":
    
    arr = [2,3,1,4,5]
    for i in range(10):
        vis.append(False)
    permute(arr)
    