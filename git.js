var SETUP=[{cmd:`git config --global user.name “[firstname lastname]”`,info:`set a name that is identifiable for credit when review version history`},{cmd:`git config --global user.email “[valid-email]”`,info:`set an email address that will be associated with each history marker`},{cmd:`git config --global color.ui auto`,info:`set automatic command line coloring for Git for easy reviewing`}];
const setup=document.querySelector(".setup");

SETUP.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger ">Description:</p>
            <p class="text-muted mx-2 info text-capitalize ">${item.info}</p>
          </div>`;
  setup.innerHTML+=div;        
});



var SETUPINIT=[{cmd:`git init`,info:`initialize an existing directory as a Git repository`},{cmd:`git clone [url]`,info:`retrieve an entire repository from a hosted location via URL`}];
const setupinit=document.querySelector(".setupinit");
SETUPINIT.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger">Description:</p>
            <p class="text-muted mx-2 info text-capitalize">${item.info}</p>
          </div>`;
  setupinit.innerHTML+=div;        
});



var STAGESNAPSHOT=[{cmd:`git status`,info:`show modified files in working directory, staged for your next commit`},{cmd:`git add [file]`,info:`add a file as it looks now to your next commit (stage)`},{cmd:`git reset [file]`,info:`unstage a file while retaining the changes in working directory`},{cmd:`git diff`,info:`diff of what is changed but not staged`},{cmd:`git diff --staged`,info:`diff of what is staged but not yet commited`},{cmd:`git commit -m “[descriptive message]”`,info:`commit your staged content as a new commit snapshot`}];
const stage=document.querySelector(".stage");
STAGESNAPSHOT.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger">Description:</p>
            <p class="text-muted mx-2 info text-capitalize">${item.info}</p>
          </div>`;
  stage.innerHTML+=div;        
});


var BRANCHMERGE=[{cmd:`git branch`,info:`ist your branches. a * will appear next to the currently active branch`},{cmd:`git branch [branch-name]`,info:`create a new branch at the current commit`},{cmd:`git checkout`,info:`switch to another branch and check it out into your working directory`},{cmd:`git merge [branch]`,info:`merge the specified branch’s history into the current one`},{cmd:`git log`,info:`show all commits in the current branch’s history`}];
const branch=document.querySelector(".branch");
BRANCHMERGE.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger">Description:</p>
            <p class="text-muted mx-2 info text-capitalize">${item.info}</p>
          </div>`;
  branch.innerHTML+=div;        
});

var INSPECTCOMPARE=[{cmd:`git log`,info:`show the commit history for the currently active branch`},{cmd:`git log branchB..branchA`,info:`show the commits on branchA that are not on branchB`},{cmd:`git log --follow [file]`,info:`show the commits that changed file, even across renames`},{cmd:`git diff branchB...branchA`,info:`show the diff of what is in branchA that is not in branchB`},{cmd:`git show [SHA]`,info:`show any object in Git in human-readable format`}];
const inspect=document.querySelector(".inspect");
INSPECTCOMPARE.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger">Description:</p>
            <p class="text-muted mx-2 info text-capitalize">${item.info}</p>
          </div>`;
  inspect.innerHTML+=div;        
});

var SHAREUPDATE=[{cmd:`git remote add [alias] [url]`,info:`add a git URL as an alias`},{cmd:`git fetch [alias]`,info:`fetch down all the branches from that Git remote`},{cmd:`git merge [alias]/[branch]`,info:`merge a remote branch into your current branch to bring it up to date`},{cmd:`git push [alias] [branch]`,info:`Transmit local branch commits to the remote repository branch`},{cmd:`git pull`,info:`fetch and merge any commits from the tracking remote branch`}]
const update=document.querySelector(".update");
SHAREUPDATE.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger">Description:</p>
            <p class="text-muted mx-2 info text-capitalize">${item.info}</p>
          </div>`;
  update.innerHTML+=div;        
});


var TRACKINGPATHCHANGES=[{cmd:`git rm [file]`,info:`delete the file from project and stage the removal for commit`},{cmd:`git mv [existing-path] [new-path]`,info:`change an existing file path and stage the move`},{cmd:`git log --stat -M`,info:`show all commit logs with indication of any paths that moved`}]
const tracking=document.querySelector(".tracking");
TRACKINGPATHCHANGES.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger">Description:</p>
            <p class="text-muted mx-2 info text-capitalize">${item.info}</p>
          </div>`;
  tracking.innerHTML+=div;        
});

var REWRITEHISTORY=[{cmd:`git rebase [branch]`,info:`apply any commits of current branch ahead of specified one`},{cmd:`git reset --hard [commit]`,info:`clear staging area, rewrite working tree from specified commit`}];
const history=document.querySelector(".history");
REWRITEHISTORY.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger">Description:</p>
            <p class="text-muted mx-2 info text-capitalize">${item.info}</p>
          </div>`;
  history.innerHTML+=div;        
});

var TEMPORARYCOMMITS=[{cmd:`git stash`,info:`Save modified and staged changes`},{cmd:`git stash list`,info:`list stack-order of stashed file changes`},{cmd:`git stash pop`,info:`write working from top of stash stack`},{cmd:`git stash drop`,info:`discard the changes from top of stash stack`}];
const temp=document.querySelector(".temp");
TEMPORARYCOMMITS.map((item)=>{
  var div=`<div class="p-3 center">
            <div class="d-flex justify-content-between">
                <p class="code">
                    ${item.cmd}
                </p>
                <button class="copy-button px-3 py-1"><i class="far fa-1x text-white fa-copy"></i></button>
            </div>
            <p class="mx-2 text-danger">Description:</p>
            <p class="text-muted mx-2 info text-capitalize">${item.info}</p>
          </div>`;
  temp.innerHTML+=div;        
});

var copy= document.querySelectorAll(".copy-button");
const copyText=(e)=>{
  var text=e.target.parentElement.previousElementSibling.innerHTML.trim();
  var input=document.createElement('input');
  input.type='text';
  input.value=text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  setTimeout(()=>{
    e.target.parentElement.parentElement.lastElementChild.innerHTML='<i class="fas fa-1x text-white fa-check-circle "></i>';
  },500)
}
copy.forEach((copied)=>{
    copied.addEventListener('click',copyText);
});

// const links=document.querySelectorAll(".dropdown-item");

// links.forEach((link)=>{
// link.addEventListener('click',(e)=>{
//     var clickLink=e.currentTarget.innerHTML;
//     // if(clickLink==='Temporary Commits')
//     // {
//     //     window.scrollTo(0,4000);
//     // }
// })
// });
const top1 =document.querySelector(".top");
top1.addEventListener('click',()=>{
    window.scrollTo(0,0);
})