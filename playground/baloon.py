temp = []
vis = []

def permute(arr):
    score = 0

    if(len(arr)==len(temp)):
        print(temp)
        # for i in temp:
        #     if(i==0):
        #         score = score + arr[i+1]
        
      
        
    else:
        for i in range(len(arr)):
            print("*******************************************")
            print(i)
            if(vis[i]==False):
                temp.append(i)
                print(temp)
                vis[i] = True
                print('***********before permute *************')
            
                print(i)
                permute(arr)
                print('***********after permute *************')
                print(i)
                print(temp)
                temp.pop()
                print(temp)
                vis[i] = False
    


if __name__ == "__main__":
    
    arr = [2,3,1]
    for i in range(10):
        vis.append(False)
    permute(arr)
    