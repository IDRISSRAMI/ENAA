#include<stdio.h>
#include<string.h>
#include <time.h>
int MAX_TACHE = 100;

typedef struct {
    char titre [100];
    char description [100];
    char date [11];
    int priorite;//0=low,1=high
    int statut;//0=incomplet,1=complet
}Tache;

Tache DB[50];

int count = 0;

void add(){
    Tache task;
    printf("entrer les details:/n");
    printf("Titre:");

    fgets(task.titre, 100,stdin);

    printf("Description:n/");

    fgets(task.description, 100,stdin);


    printf("statut:");

    scanf("%d", &task.statut);


    printf("entrer priorite 1(high/low):");


    scanf("%d", &task.priorite);

    
    DB[count++] = task;
    printf("tache added succesfuly/n");


    
  

}

void affichage(){
    if(count == 0){
    printf("aucune tache a afficher.\n");
    return;
    }
    printf("/n menu pour taches\n:");
for(int i=0;i<count;i++){
    
    printf("\ntache %d:\n" , i +1);

    printf("\nTitre: %s\n" , DB[i].titre);


    printf("Description: %s\n" , DB[i].description);
 

    printf("priorite: %d/n" , DB[i].priorite == 1 ? "high" : "low");

    printf("Statut: %s\n", DB[i].statut == 0 ? "incomplete" : "complete");
}
}
void mise_a_jour(){
    int tache_index;
    int update_titre, update_desc, update_status, update_priorite;
    if (count ==0){
        printf("acune tache pour modifier.\n");
        return;
    }
   printf("selectioner la tache que vous voulait modifier");
    affichage();
    scanf("%d", &tache_index);
    
    //changer titre
    printf("modifier titre ? (yes 1, no 0)");
    scanf("%d", &update_titre);
    if(update_titre == 1) {
        char new_titre[100];
        printf("new titre: ");
        fgets(new_titre, 100, stdin);
        strcpy(DB[tache_index].titre, new_titre);
    }
        printf("modifier desc ? (yes 1, no 0)");
        scanf("%d",&update_desc);
        if(update_desc == 1) {
            char new_desc[100];
            printf("new description: ");
            fgets(new_desc,100,stdin);
            strcpy(DB[tache_index].description,new_desc);
        }

         printf("modifier statut ?(0=incomplet,1=complet) ");
        scanf("%d",&update_status);
        if (update_status == 1){
            int new_status;
            printf("new status:");
            scanf("%d" ,&new_status);
            DB[tache_index].statut = new_status;
        }
        printf("modifier priorite ? (0=low,1=high) ");
        scanf("%d",&update_priorite);
        if(update_priorite == 1){
            int new_priorite;
            printf("new priorite:");
            scanf("%d" ,&new_priorite);
        DB[tache_index].priorite = new_priorite;}    
}
void supprimer(){
    int tach_index;

    if(count == 0){
        printf("aucune tache a supprimer.\n");
    }
    printf("Entrer le numéro de la tache a supprimer(1-%d):", count);
    scanf("d", &tach_index);
    for (int i = tach_index; i < count; i++)
    {
        DB[i] = DB[i + 1];
    }
    count--;
    printf("tache supprimer avec succes !\n");
    
}
int main(){
   
    int action; // 1 => 7

    do
    {
        printf("selectionez action: \n"); 

        printf("1:ajouter, 2:afficher, 3:modifier, 4:supprimer \n");
        scanf("%d", &action);
        getchar();
        switch (action)
        {
        case 1: 
            add();
            break;
        case 2: 
            affichage();
            break;
        case 3 : 
             mise_a_jour();
            break;
        case 4:
             supprimer();
            break;

        case 7: printf("bye bye !\n");
         break;
        
        default:
            printf("choix non valid .\n");
        }
    } while (action != 7);
    

    return 0;
 }
